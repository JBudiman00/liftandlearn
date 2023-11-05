// components/Formik.js
import { Formik } from 'formik';
import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native';
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
        props.setResult(result);
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={{height: "15%"}}>
          <View style={{flex: 1}}>
          <TextInput 
            onChangeText={handleChange('search')} 
            value={values.search} 
            style={styles.input}
          />
          <View style={{alignItems: 'center', height: '60%'}}>
            <Pressable onPress={handleSubmit}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{backgroundColor: "#24A0ED", borderRadius: 20, width: 80, height: 50}}>
                  <View style={{flex: 1, justifyContent: 'center', }}>
                    <Text style={{textAlign: 'center'}}>Search</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
          <Text style={{textAlign: "center", color: 'red'}}>{errors.search}</Text>
        </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
  },
});

export default SearchBar;