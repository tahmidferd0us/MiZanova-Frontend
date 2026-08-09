export const SIGNUP_PATHS = [
  {
    role: 'teacher',
    title: 'Teacher',
    description: "Sign up to join your school's MiZanova account. You'll need your school's invite code or to select your school from a list.",
  },
  {
    role: 'parent',
    title: 'Parent',
    description: "Sign up to support your child. You can join your child's school if they're already on MiZanova, or start independently.",
  },
  {
    role: 'specialist',
    title: 'Specialist',
    description: 'Sign up to support your students and families. You can join an existing school on MiZanova, or manage your specialist practice independently.',
  },
];

export const findSignupPath = (role) => SIGNUP_PATHS.find((path) => path.role === role) ?? null;
