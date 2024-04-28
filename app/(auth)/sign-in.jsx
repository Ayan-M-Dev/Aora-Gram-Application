import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <View>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center min-h-[85vh] px-4 my-6">
            <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
          </View>
        </ScrollView>      
      </SafeAreaView>
    </View>
  )
}

export default SignIn