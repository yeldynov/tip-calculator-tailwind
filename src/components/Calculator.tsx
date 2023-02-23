import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import DollarIcon from '../assets/icon-dollar.svg';
import PersonIcon from '../assets/icon-person.svg';

interface FormValues {
  bill: number;
  tip: number;
  numberOfPerson: number;
}

const initialValues: FormValues = {
  bill: 0,
  tip: 0,
  numberOfPerson: 0,
};

const validationSchema = Yup.object().shape({
  bill: Yup.number().moreThan(0, 'Bill can not be 0.'),
  tip: Yup.number().moreThan(0, 'Tip must be at least 1 percent.'),
  numberOfPerson: Yup.number().moreThan(0, 'Number of Person can not be zero'),
});

export default function Calculator() {
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  const onSubmit = (values: FormValues) => {
    if (values.bill || values.tip || values.numberOfPerson) {
      setTipPerPerson(
        +((values.bill / values.numberOfPerson) * values.tip).toFixed(2)
      );
      setTotalPerPerson(+(values.bill / values.numberOfPerson).toFixed(2));
    } else {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    }
  };

  const handleReset = ({ resetForm }: FormikHelpers<FormValues>) => {
    resetForm();
    setTotalPerPerson(0);
    setTipPerPerson(0);
  };

  return (
    <div className='flex h-full w-full p-5 mt-8 flex-col desk:flex-row gap-5 bg-c-white  rounded-xl desk:w-[50%] desk:h-[60%]'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          setFieldValue,
        }) => (
          <>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-5 flex-1'
            >
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs text-c-dark-grayish-cyan'>Bill</h1>
                <label className='relative text-gray-400 focus-within:text-gray-600 block'>
                  <img
                    className='pointer-events-none w-2 absolute top-1/2 transform -translate-y-1/2 left-3'
                    src={DollarIcon}
                    alt=''
                  />

                  <input
                    type='number'
                    name='bill'
                    id='bill'
                    placeholder='142.55'
                    value={values.bill}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input border rounded-sm py-1 px-4 bg-c-very-light-grayish-cyan text-right  placeholder-gray-400 text-c-very-dark-cyan appearance-none w-full  pl-14 focus:outline-none ${
                      !touched.bill && 'border-gray-200'
                    } ${
                      touched.bill && errors.bill
                        ? 'border-red-500'
                        : 'border-green-500'
                    }`}
                  />
                </label>
                {touched.bill && errors.bill && (
                  <span className='text-red-500 text-[10px] italic'>
                    {errors.bill}
                  </span>
                )}
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs text-c-dark-grayish-cyan'>
                  Select Tip %
                </h1>
                <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-3'>
                  <button
                    type='submit'
                    onClick={() => setFieldValue('tip', 0.05)}
                    className='bg-c-very-dark-cyan text-c-white focus:bg-c-strong-cyan rounded-sm text-sm py-1'
                  >
                    5%
                  </button>
                  <button
                    type='submit'
                    onClick={() => setFieldValue('tip', 0.1)}
                    className='bg-c-very-dark-cyan text-c-white focus:bg-c-strong-cyan rounded-sm text-sm py-1'
                  >
                    10%
                  </button>
                  <button
                    type='submit'
                    onClick={() => setFieldValue('tip', 0.15)}
                    className='bg-c-very-dark-cyan text-c-white focus:bg-c-strong-cyan rounded-sm text-sm py-1'
                  >
                    15%
                  </button>
                  <button
                    type='submit'
                    onClick={() => setFieldValue('tip', 0.25)}
                    className='bg-c-very-dark-cyan text-c-white focus:bg-c-strong-cyan rounded-sm text-sm py-1'
                  >
                    25%
                  </button>
                  <button
                    type='submit'
                    onClick={() => setFieldValue('tip', 0.5)}
                    className='bg-c-very-dark-cyan text-c-white focus:bg-c-strong-cyan rounded-sm text-sm py-1'
                  >
                    50%
                  </button>
                  <input
                    type='number'
                    name='customTip'
                    id='customTip'
                    placeholder='99%'
                    className='form-input text-right text-c-very-dark-cyan px-1'
                    onSubmit={(event) =>
                      setFieldValue(
                        'tip',
                        (event.target as HTMLInputElement).value
                      )
                    }
                  />
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xs text-c-dark-grayish-cyan'>
                  Number of People
                </h1>
                <label className='relative text-gray-400 focus-within:text-gray-600 block'>
                  <img
                    className='pointer-events-none w-2 absolute top-1/2 transform -translate-y-1/2 left-3'
                    src={PersonIcon}
                    alt=''
                  />

                  <input
                    type='number'
                    name='numberOfPerson'
                    id='numberOfPerson'
                    placeholder='5'
                    value={values.numberOfPerson}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input border rounded-sm py-1 px-4 bg-c-very-light-grayish-cyan text-right  placeholder-gray-400 text-c-very-dark-cyan appearance-none w-full  pl-14 focus:outline-none ${
                      !touched.numberOfPerson && 'border-gray-200'
                    } ${
                      touched.numberOfPerson && errors.numberOfPerson
                        ? 'border-red-500'
                        : 'border-green-500'
                    }`}
                  />
                </label>
                {touched.numberOfPerson && errors.numberOfPerson && (
                  <span className='text-red-500 text-[10px] italic'>
                    {errors.numberOfPerson}
                  </span>
                )}
              </div>
            </form>

            <div className='bg-c-very-dark-cyan p-5 flex flex-col flex-1 justify-between gap-5 rounded-lg'>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <h2 className='text-xs text-c-white'>Tip Amount</h2>
                    <p className='text-[16px] text-c-grayish-cyan'>/ person</p>
                  </div>
                  <h1 className='text-c-strong-cyan text-xl'>
                    ${tipPerPerson}
                  </h1>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <h2 className='text-xs text-c-white'>Total</h2>
                    <p className='text-[16px] text-c-grayish-cyan'>/ person</p>
                  </div>
                  <h1 className='text-c-strong-cyan text-xl'>
                    ${totalPerPerson}
                  </h1>
                </div>
              </div>
              <button
                onClick={() =>
                  handleReset({ resetForm } as FormikHelpers<FormValues>)
                }
                className='bg-c-strong-cyan rounded-md py-1 text-c-very-dark-cyan'
              >
                RESET
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
