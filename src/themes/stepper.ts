const baseStyle = {
  indicator: {
    border: 'none',
    backgroundColor: '#D9D9D9',
    fontSize: 'xs',
    height: '7',
    width: '7',
  },
  title: {
    color: 'green.300',
    fontWeight: 'medium',
    whiteSpace: 'nowrap',
  },
  stepper: {
    gap: '8',
  },
  number: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  step: {
    gap: '1'
  },
};

const variants = {
  status: {
    indicator: {
      border: '0.5px solid #C2C2C2',
      padding: '10px',
      background: 'gray.300',
      h: '7',
      w: '7',
    },
    stepper: {
      gap: '0',
    },
    separator: {
      border: '0px solid #1C1C1C1A',
      background: '#1C1C1C1A',
      height: '50%',
    },
    title: {
      fontWeight: 'medium',
    },
    description: {
      fonWeight: 'medium',
      color: 'gray.400',
      fontSize: '10px',
    },
    step: {
      gap: 2,
    },
  },
};

export const stepperTheme = {
  baseStyle,
  variants,
};
