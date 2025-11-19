import { Formik, Form, Field } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Box,
  FormGroup,
  FormControl,
  FormLabel,
  Stack,
  Alert,
  CircularProgress,
  AlertTitle,
} from "@mui/material";
import { settingSchema } from "./schema";
import { ISetting } from "../../store/types.d";
import { useGetSettingsQuery, useUpdateSettingMutation } from "../../store";

export default function SettingFormPage() {
  const { data, isLoading } = useGetSettingsQuery();
  const [updateSetting] = useUpdateSettingMutation();

  const handleSubmit = (values: ISetting) => updateSetting(values);

  if (isLoading) return <CircularProgress />;
  if (!data) return <Typography>An error occur</Typography>;
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Formik
        initialValues={data}
        validationSchema={settingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Stack component={Form} spacing={2}>
            <Box mb={2}>
              <Field
                as={TextField}
                name="clientId"
                label="Client ID"
                type="number"
                fullWidth
                error={touched.clientId && !!errors.clientId}
                helperText={touched.clientId && errors.clientId}
                disabled
              />
            </Box>

            <FormControl>
              <FormLabel>Fulfillment Format</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="fulfillmentFormat.rfid"
                    />
                  }
                  label="RFID"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="fulfillmentFormat.print"
                    />
                  }
                  label="Print"
                />
              </FormGroup>
            </FormControl>

            <FormControl variant="standard">
              <FormLabel>Payment Methods</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="paymentMethods.cash"
                    />
                  }
                  label="Cash"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="paymentMethods.creditCard"
                    />
                  }
                  label="Credit Card"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="paymentMethods.comp"
                    />
                  }
                  label="Comp"
                />
              </FormGroup>
            </FormControl>

            <FormControl variant="standard">
              <FormLabel>Printing Format</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="printingFormat.formatA"
                    />
                  }
                  label="Format A"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="printingFormat.formatB"
                    />
                  }
                  label="Format B"
                />
              </FormGroup>
            </FormControl>

            <FormControl variant="standard">
              <FormLabel>Scanning</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="scanning.scanManually"
                    />
                  }
                  label="Scan Manually"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="scanning.scanWhenComplete"
                    />
                  }
                  label="Scan When Complete"
                />
              </FormGroup>
            </FormControl>

            <FormControl variant="standard">
              <FormLabel>Ticket Display</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="ticketDisplay.leftInAllotment"
                    />
                  }
                  label="Left In Allotment"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="ticketDisplay.soldOut"
                    />
                  }
                  label="Sold Out"
                />
              </FormGroup>
            </FormControl>

            <FormControl variant="standard">
              <FormLabel>Customer Info</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="customerInfo.active"
                    />
                  }
                  label="Active"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="customerInfo.basicInfo"
                    />
                  }
                  label="Basic Info"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="customerInfo.addressInfo"
                    />
                  }
                  label="Address Info"
                />
              </FormGroup>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Save Settings
            </Button>

            {!!Object.entries(errors).length && (
              <Alert severity="error">
                <AlertTitle>Validation error</AlertTitle>
                <pre>
                  <code>{JSON.stringify(errors)}</code>
                </pre>
              </Alert>
            )}
          </Stack>
        )}
      </Formik>
    </Box>
  );
}
