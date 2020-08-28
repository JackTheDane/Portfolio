import { MessageResultStates } from './../../models/enums/MessageResultStates';
import { getSerializedFormData } from './getSerializedFormData';

export const submitFomToAction = async (form: HTMLFormElement): Promise<Response> => {
  const serializedFormData: URLSearchParams = getSerializedFormData(form);

  // Post using Netlify
  return fetch(form.action, {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: serializedFormData
  })
}
