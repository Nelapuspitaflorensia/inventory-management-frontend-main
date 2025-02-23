export function piniaPersistPlugin(context) {
  const storedState = localStorage.getItem("pinia-${context.store.$id}");

  if (storedState) {
    context.store.$patch(JSON.parse(storedState));
  }

  context.store.$subscribe((store) => {
    localStorage.setItem(
      "pinia-${context.store.$id}",
      JSON.stringify(store.$state)
    );
  });
}
