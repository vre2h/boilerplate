import { useEffect } from "react";

export default function useResetFormOnCloseModal({ form, visible }) {
  useEffect(() => {
    form.resetFields();
  }, [visible]);
}
