import { Input, Radio, RadioGroup } from '@nextui-org/react';
import styles from './QueryForm.module.css';
import AccentButton from '../AccentButton/AccentButton';

const QueryForm = () => {
  return (
    <div className={styles.queryForm}>
      <div>
        <Input className='col-3' type='text' label='first name' />
        <Input className='col-5' type='text' label='last name' />
      </div>
      <div>
        <Input className='col-5' type='email' label='email' />
        <Input className='col-3' type='contact-number' label='contact number' />
      </div>

      <div className={styles.selectorSection}>
        <p>would you prefer us to call or email?</p>
        <RadioGroup className={styles.radioGroup} orientation='horizontal'>
          <Radio value='call'>call</Radio>
          <Radio value='email'>email</Radio>
        </RadioGroup>
      </div>

      <Input
        className={styles.moreInput}
        type='text'
        label=''
        placeholder="tell us more about what you're looking for and we'll reach out"
      />

      <div className={styles.buttonContainer}>
        <AccentButton>send request</AccentButton>
      </div>
    </div>
  );
};

export default QueryForm;
