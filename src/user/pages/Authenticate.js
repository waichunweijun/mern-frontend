import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../shared/util/Validator';
import Card from '../../shared/components/UIElement/Card';
import { useForm } from '../../shared/hooks/form-hook';

import '../../scss/Authenticate.scss';


const Authenticate = () => {
    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form>
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="E-mail"
                    validator={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid email address"
                />
            </form>
        </Card>
    )
}

export default Authenticate;