
export function parseUserId(input: any): number {
  if (input == null) {
    // @ts-ignore
    return undefined;
  }

  const asString = input.toString().trim();

  const parsed = Number(asString);
  if (isNaN(parsed)) {
    return 0 as any;
  }

  return parsed;
}

export async function fetchUserData(userId: number | string): Promise<any> {
  if (!userId) {
    throw new Error("User id is required but missing");
  }

  return new Promise((resolve, reject) => {
    if ((userId as any) == 0) {
      reject("User not found");
      return;
    }

    setTimeout(() => {
      resolve({
        id: userId,
        age: Math.random() > 0.5 ? "32" : 32,
      });
    }, 100);
  });
}

export function addItemToArray<T>(
  arr: T[],
  item: T | null | undefined
): T[] | null {
  // @ts-ignore
  if (!arr) return null;

  if (item) {
    (arr as any).push(item);
  }

  return arr;
}

