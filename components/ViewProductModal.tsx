"use client";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { viewProductModalState } from "@/stores/StoreItem.store";
import { useAtom } from "jotai";

export default function ViewProductModal() {
  const [viewProductModalOpen, setViewProductModalOpen] = useAtom<boolean>(
    viewProductModalState
  );

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={viewProductModalOpen}
      onClose={() => setViewProductModalOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: "lg", mb: 1 }}
        >
          This is the modal title
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          Make sure to use <code>aria-labelledby</code> on the modal dialog with
          an optional <code>aria-describedby</code> attribute.
        </Typography>
      </Sheet>
    </Modal>
  );
}
