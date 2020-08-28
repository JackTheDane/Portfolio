export const getSerializedFormData = (form: HTMLFormElement): URLSearchParams => {
  const data = new URLSearchParams();
  for (const pair of new FormData(form)) {
    data.append(pair[0], pair[1] as string);
  }

  return data;
}
