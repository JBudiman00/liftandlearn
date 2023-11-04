// components/Formik.js
import { Formik } from 'formik';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import getConstResults from '../endpoints/wikiapi';
import * as Yup from 'yup';

const SearchBar = (props: {setResult: any}) => {
  const initialValues = { search: '' };

  const SearchSchema = Yup.object().shape({
    search: Yup.string().min(1, 'Search field cannot be blank').test('required', 'Search field cannot be blank', (value, context) => {
      if (value === undefined){
        props.setResult([]);
        return false
      }
      return true
    })
  });

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={SearchSchema}
      validateOnBlur={false} 
      validateOnChange={false} 
      onSubmit={async (values) => {
        const result = await getConstResults(values.search);
        console.log(result);
        props.setResult(result);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <TextInput 
            onChangeText={handleChange('search')} 
            value={values.search} 
            style={styles.input}
          />
          <Button onPress={handleSubmit} title="Search" />
          <Text style={{textAlign: "center", color: 'red'}}>{errors.search}</Text>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
  },
});

export default SearchBar;