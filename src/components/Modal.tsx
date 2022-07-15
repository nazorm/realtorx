import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PrimaryButton, TransparentButton } from "./Button"


export interface IDialogModal {
    isModalOpen: boolean,
    toggleModal: () => void;
    title?: string;
    children?: any;
    primaryBtnText: string;
    primaryAction: () => void;
    secondaryBtnText: string;
    secondaryBtn: () => void;
}

export const DialogModal = (props: IDialogModal) => {
    const { isModalOpen, toggleModal, title, children, primaryBtnText, primaryAction, secondaryBtn, secondaryBtnText } = props
    return (
        <Wrapper>
            <Dialog open={isModalOpen} onClose={toggleModal}>
                <DialogContent>
                    <DialogContentText>
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <TransparentButton content={secondaryBtnText} secondaryBtnAction={secondaryBtn} />
                    <PrimaryButton content={primaryBtnText} primaryBtnAction={primaryAction} />
                </DialogActions>
            </Dialog>
        </Wrapper>
    )
}
const Wrapper = styled.div``;