export interface ModalType {
  children: React.ReactNode;
  onClickEffect?: () => void;
}


export interface ModalTitle {

  children: React.ReactNode;
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