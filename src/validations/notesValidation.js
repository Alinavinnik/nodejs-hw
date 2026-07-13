import { Joi, Segments } from 'celebrate';

export const bodySchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string(),
  tag: Joi.string(),
  search: Joi.string().allow(),
});

export const getNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1),
    perPage: Joi.number().integer().min(2).max(20),
  }),
};
