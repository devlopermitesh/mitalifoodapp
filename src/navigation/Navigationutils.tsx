import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { StackScreen } from '../navigation/router';

export const navigationRef = createNavigationContainerRef<StackScreen>();

type RouteName = Extract<keyof StackScreen, string>;

function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

async function waitForNavigationReady({
  timeoutMs = 2000,
  pollIntervalMs = 50,
}: {
  timeoutMs?: number;
  pollIntervalMs?: number;
} = {}) {
  const start = Date.now();
  while (!navigationRef.isReady()) {
    if (Date.now() - start > timeoutMs) {
      return false;
    }
    await sleep(pollIntervalMs);
  }
  return true;
}

export async function navigate<Route extends RouteName>(
  route: Route,
  params?: StackScreen[Route],
) {
  const ready = await waitForNavigationReady();
  if (!ready) {
    console.warn('Navigation not ready when trying to navigate', route);
    return;
  }

  navigationRef.dispatch(
    CommonActions.navigate({
      name: route,
      params: params as object | undefined,
    }),
  );
}

export async function resetAndnavigate<Route extends RouteName>(
  route: Route,
  params?: StackScreen[Route],
) {
  const ready = await waitForNavigationReady();
  if (!ready) {
    console.warn(
      'Navigation not ready when trying to reset and navigate',
      route,
    );
    return;
  }

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route, params: params as object | undefined }],
    }),
  );
}

// Optional casing alias for consistency with other helpers.
export const resetAndNavigate = resetAndnavigate;

export async function reset<Route extends RouteName>(
  route: Route,
  params?: StackScreen[Route],
) {
  const ready = await waitForNavigationReady();
  if (!ready) {
    console.warn('Navigation not ready when trying to reset', route);
    return;
  }

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route, params: params as object | undefined }],
    }),
  );
}
export async function goBack() {
  const ready = await waitForNavigationReady();
  if (!ready) {
    console.warn('Navigation not ready when trying to go back');
    return;
  }

  navigationRef.dispatch(CommonActions.goBack());
}
