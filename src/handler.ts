import generateHtml from './generateHtml';

export const runCronJob = () => {
  generateHtml()
    .then(
      () => 1,
      (err) => console.error(err),
    )
    .catch((err) => console.error(err));
};
