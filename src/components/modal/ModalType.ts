export interface ModalType {
  children: React.ReactNode;
  onClickEffect?: () => void;
}


export interface ModalHeader {
  title: string;
}

export interface ModalFooter {
  cancel: string;
  except: string;
  onClickEffect?: () => void;
}