import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "black",
	border: "2px solid #000",
	borderRadius: "25px",
	boxShadow: 24,
	p: 4,
};

export function Instructions() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<button onClick={handleOpen}>Instructions</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Instructions
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<div>
							Add one card per line in the format "[number] [card name]"
						</div>
						<p>
							<div>
								<i>Example:</i>
							</div>
							<div>1 Sol Ring</div>
							<div>1 Arcane Signet</div>
							<div>1 Fellwar Stone</div>
						</p>
					</Typography>
					<div>
						Images provided by{" "}
						<a href="https://scryfall.com/docs/api">scryfall API</a>
					</div>
				</Box>
			</Modal>
		</>
	);
}
