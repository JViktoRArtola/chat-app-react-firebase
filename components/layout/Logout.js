import React, {useContext} from 'react'
import FirebaseContext from "../../firebase/context";
import {Proceed, Cancel, Exit, Container, Section, Title, Bar, Float} from "../ui/ModalStyled";

const Logout = ({show, setModal}) => {
    const {firebase} = useContext(FirebaseContext);

    return (
        <Float>
            <Exit onClick={() => setModal(true)}>LogOut</Exit>
            {show &&
            <Container>
                <Section>
                    <Title>Are you sure you want to exit ?</Title>
                    <Bar>
                        <Proceed type="button" onClick={() => {
                            setModal(false)
                            firebase.logout()
                        }}>
                            Yes, I am
                        </Proceed>
                        <Cancel type="button" onClick={() => {
                            setModal(false)
                        }}>
                            Nop
                        </Cancel>
                    </Bar>
                </Section>
            </Container>
            }
        </Float>
    );
};

export default Logout
