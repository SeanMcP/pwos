import React from 'react'
import { navigate } from '@reach/router'
import {
    Button,
    Label,
    Pane,
    Textarea,
    TextInputField,
    majorScale
} from 'evergreen-ui'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'

function AddView() {
    const [, { add }] = useIndividuals()
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        const name = formData.get('name'),
            birthday = formData.get('birthday'),
            notes = formData.get('notes')
        if (name) {
            add({ name, birthday, notes })
            form.reset()
            navigate(ROUTES.all)
        }
    }
    return (
        <ViewContainer title="Add">
            <form onSubmit={handleSubmit}>
                <TextInputField label="Name" name="name" required />
                <TextInputField label="Birthday" name="birthday" type="date" />
                <Pane>
                    <Label htmlFor="notes" marginBottom={4} display="block">
                        Notes
                    </Label>
                    <Textarea id="notes" name="notes" />
                </Pane>
                <Button
                    appearance="primary"
                    iconBefore="add"
                    marginTop={majorScale(3)}
                >
                    Add
                </Button>
            </form>
        </ViewContainer>
    )
}

export default AddView
