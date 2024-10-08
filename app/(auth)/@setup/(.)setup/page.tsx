import React from 'react'
import { SetupModal } from '../setup-modal'
import { SetupScreen } from '../../components/setup-screen'



const SetupPage = () => {
    return (
        <SetupModal>
            <SetupScreen />
        </SetupModal>
    )
}

export default SetupPage