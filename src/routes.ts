const routes = {
  main: {
    dashboard: '/app',

    swap: '/swap',
    confirmingSwap: '/confirming-swap',
    transferSuccess: '/transfer-success',

    withdrawal: '/withdrawal',
    withdrawalSuccess: '/withdrawal-success',

    send: '/send',
    sendSummary: '/send-summary',
    sendConfirmationSuccess: '/send-confirmation-success',

    receive: '/receive',

    tokenDetail: '/token-detail',
    individualCryptoDetails: '/individual-crypto-details',
  },
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    verifyAccount: '/verify-account',
    resetPassword: '/reset-password',
    confirmResetPassword: '/confirm-reset-password',
    resetPasswordSuccessful: '/reset-password-successful',
  },
  settings: '/settings',
};

export default routes;
