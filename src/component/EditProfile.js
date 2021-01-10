import React from 'react'

/**
* @author
* @function EditProfile

**/

const EditProfile = (props) => {
    return(
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group>
                     <Form.Control plaintext readOnly defaultValue="location" />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="select" size="sm">
                        <option>email@example.com</option>
                    </Form.Control>
                </Form.Group>

               

                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                <Form.Control plaintext readOnly defaultValue="email@example.com" />

            </Form>

        </div>
    )

}

export default EditProfile
