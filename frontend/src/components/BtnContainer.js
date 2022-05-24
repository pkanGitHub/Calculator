import React from 'react'
import Button from './Button'

const BtnContainer = () => {
    return (
        <div>
            <div>
                <Button label={'AC'} />
                <Button label={'%'} />
                <Button label={'/'} />
            </div>
            <div>
                <Button label={'7'} />
                <Button label={'8'} />
                <Button label={'9'} />
                <Button label={'*'} />
            </div>
            <div>
                <Button label={'4'} />
                <Button label={'5'} />
                <Button label={'6'} />
                <Button label={'-'} />
            </div>
            <div>
                <Button label={'1'} />
                <Button label={'2'} />
                <Button label={'3'} />
                <Button label={'+'} />
            </div>
            <div>
                <Button label={'0'} />
                <Button label={'.'} />
                <Button label={'DEL'} />
                <Button label={'='} />

            </div>
        </div>
    )
}
export default BtnContainer