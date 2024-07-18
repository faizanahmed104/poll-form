export interface Option {
  label: string;
  icon: string;
}

export interface Step {
  title: string;
  options: Option[];
}

export interface OptionPanel {
  currentQuestion: number;
  answers: number[];
  handleOptionSelect: (index: number) => void;
}

export interface QuestionPanel {
  currentQuestion: number;
  isAnimating: boolean;
  handleQuestionChange: (index: number) => void;
}

export interface ResultPanel {
  answers: number[];
  submitError: string | null;
  revealResults: boolean;
  isSubmitting: boolean;
  submitResults: () => void;
}
