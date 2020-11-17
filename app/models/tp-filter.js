import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';
const Validations = buildValidations({
  tenant: [
    validator('presence', true),
    validator('length', {
      max: 64,
    }),
  ],
  customId: [
    validator('presence', true),
    validator('length', {
      max: 64,
    }),
  ],
  type: [
    validator('presence', true),
    validator('length', {
      max: 64,
    }),
  ],
  element: [
    validator('presence', true),
    validator('length', {
      max: 64,
    }),
  ],
  values: [
    validator('presence', true),
    validator('length', {
      max: 256,
    }),
  ],
  activationInterval: validator('length', { max: 64 }),
});
export default Model.extend(Validations, {
  tpid: attr('string'),
  tenant: attr('string'),
  customId: attr('string'),
  activationInterval: attr('string'),
  createdAt: attr('date'),
  type: attr('string'),
  element: attr('string'),
  values: attr('string'),
});
