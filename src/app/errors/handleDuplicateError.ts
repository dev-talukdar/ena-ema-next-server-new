/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  let specificMessage = 'is already in use';
  if (err.message.includes('email')) {
    specificMessage = 'Duplicate Email, please try with new email';
  } else if (err.message.includes('phone')) {
    specificMessage = 'Duplicate Phone number, use new phone number';
  }

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} ${specificMessage}`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: specificMessage,
    errorSources,
  };
};

export default handleDuplicateError;
