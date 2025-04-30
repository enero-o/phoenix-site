import type { FC } from 'react';

import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

import type { StepData } from '@lyte/types/type';

interface ComponentProps {
  activeStep: number;
  steps: StepData[];
  orientation?: any;
  variant?: string;
  hasDescription?: boolean;
  height?: string;
}

const CustomStepper: FC<ComponentProps> = ({
  activeStep,
  hasDescription,
  height,
  steps,
  orientation = 'horizontal',
  variant,
}) => {
  return (
    <Stepper
      variant={variant}
      size="md"
      height={height}
      colorScheme="green"
      index={activeStep}
      orientation={orientation}
      display={hasDescription ? 'flex' : { base: 'none', md: 'flex' }}
    >
      {steps?.map((step, index) => (
        <Step key={index}>
          <Box fontSize="xs">
            <StepIndicator fontSize="xs">
              <StepStatus
                complete={hasDescription ? <StepIcon /> : index + 1}
                incomplete={hasDescription ? '' : <StepNumber />}
                active={hasDescription ? '' : <StepNumber />}
              />
            </StepIndicator>
          </Box>

          <Box>
            <StepTitle
              style={{
                color: activeStep > index ? 'green.300' : hasDescription ? '#787878' : 'black',
                fontWeight: activeStep > index ? 'semibold' : hasDescription ? 'normal' : 'medium',
              }}
            >
              {step.title}
            </StepTitle>
            {hasDescription && <StepDescription>{step.description}</StepDescription>}
          </Box>

          {hasDescription && (
            <StepSeparator style={{ borderColor: '#1C1C1C1A', color: activeStep > index ? 'gray.400' : '#8E8E8E' }} />
          )}
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
