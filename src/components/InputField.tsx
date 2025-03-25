import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  'data-testid'?: string;
}

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  ${props => props.hasError && `
    border-color: #dc3545;
    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.25);
  `}
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  'data-testid': testId
}) => {
  return (
    <InputWrapper data-testid={testId ? `${testId}-wrapper` : undefined}>
      <Label data-testid={testId ? `${testId}-label` : undefined}>{label}</Label>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
        data-testid={testId}
      />
      {error && (
        <ErrorMessage data-testid={testId ? `${testId}-error` : undefined}>{error}</ErrorMessage>
      )}
    </InputWrapper>
  );
};
