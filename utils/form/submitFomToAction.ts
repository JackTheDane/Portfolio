import { getSerializedFormData } from './getSerializedFormData';

export const submitFomToAction = (form: HTMLFormElement): Promise<void> => new Promise((resolve, reject) => {

  if (!form.action) {
    reject('No form action set');
    return;
  }

  const serializedFormData: URLSearchParams = getSerializedFormData(form);

  // Post using Netlify
  fetch(form.action, {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: serializedFormData
  })
    .then(({
      ok,
      status,
      statusText
    }) => {
      if (ok) {
        resolve();
      } else {
        reject(`${status} - ${statusText}`);
      }
    })
    .catch(reject)
});
