import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {TextField} from "@material-ui/core";
import {IconButton} from "@material-ui/core";

export type AddItemFormPropsType = {
 //   addItem:(title:string)=>void
    addItem:(title:string)=>void


}
export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }
    return (
        <div>
            <TextField value={title}
                       variant={'outlined'}
                       label={'Type value'}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   error={!!error}
                       helperText={error}
            />
            <IconButton onClick={addItem}  color={'primary'}>
                <ControlPointIcon/>
            </IconButton>
            {/*} {error && <div className="error-message">{error}</div>}*/}
        </div>
    )}
      ;