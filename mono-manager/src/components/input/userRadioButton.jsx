// import RadioGroup from '@mui/material/RadioGroup';
// import { FormControlLabel, OutlinedInput, Radio, Typography } from '@mui/material';
// import { useState } from 'react';
// import { useContext } from 'react';
// import { ValidateContext } from 'components/form/ValidateContext';

// export const RadioButtonGender = ({ name, loading, ...props }) => {
//     const { error } = useContext(ValidateContext);
//     const [valueGender, setValueGender] = useState('');
//     return (
//         props.data && (
//             <>
//                 <OutlinedInput
//                     id={name}
//                     name={name}
//                     type="text"
//                     error={props?.error ?? Object.keys(error).includes(props.name)}
//                     maxLength="255"
//                     sx={{ backgroundColor: 'white' }}
//                     value={valueGender}
//                     className="userGender"
//                     startAdornment={
//                         <RadioGroup
//                             onChange={(e) => {
//                                 setValueGender(e.target.value);
//                             }}
//                         >
//                             <ul style={{ display: 'flex', paddingInlineStart: '0px', ...props.style }}>
//                                 {props.data?.map((e, i) => (
//                                     <li key={i} style={{ listStyle: 'none' }}>
//                                         <FormControlLabel
//                                             value={e.code}
//                                             className="userGenderRadio"
//                                             control={<Radio color="default" size={props?.size} />}
//                                             label={e.code_eng_nm || e.codeEngNm}
//                                         />
//                                     </li>
//                                 ))}
//                             </ul>
//                         </RadioGroup>
//                     }
//                     {...props}
//                 />
//                 {Object.keys(error).includes(props.id) && (
//                     <Typography color="red" fontSize={12} position="">
//                         {error[props.id]}
//                     </Typography>
//                 )}
//             </>
//         )
//     );
// };
