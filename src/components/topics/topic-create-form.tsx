'use client';

import {
    Input,
    Button,
    Textarea,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';
import * as actions from '@/actions';
import { useFormState } from 'react-dom';
import FormButton from '@/components/common/form-button';

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, {
        errors: {} // initially there are zero errors
    });
    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <Button color='primary'>Create a topic</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className='flex flex-col gap-4 p-4 w-80'>
                        <h3 className='text-lg'>Create a topic</h3>
                        <Input
                            name='name'
                            label='Name'
                            labelPlacement='outside'
                            placeholder='Name'
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')} />
                        <Input
                            name='description'
                            label="Description"
                            labelPlacement='outside'
                            placeholder='Describe your topic'
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(', ')} />
                        {formState.errors._form ? (
                            <div className='text-red-500 font-bold'>
                                {formState.errors._form.join(', ')}
                            </div>
                        ) : (
                            null
                        )}
                        <FormButton>Save</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}