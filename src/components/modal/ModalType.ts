export interface ModalType {
  children: React.ReactNode;
  onClickEffect?: () => void;
}


export interface ModalHeader {
  title: string;
}

export interface ModalClose {
  onClickEffect?: () => void;
}

export interface ModalFooter {
  cancel: string;
  confirm: string;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
}