import { useQuery } from "@apollo/client";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { GET_JOB_DETAILS } from "../quaries/job";

const JopDetailes = ({ route }) => {
  const { job } = route.params;
  const { data, error } = useQuery(GET_JOB_DETAILS, {
    variables: {
      input: {
        jobSlug: job.slug,
        companySlug: job.company.slug
      }
    }
  });
  if (data) console.log(data);

  if (error) console.log(JSON.stringify(error, null, 2));
  return (
    <ScrollView>
      <Text>
        {data?.job.description}
      </Text>
    </ScrollView>
  );
};

export default JopDetailes;
