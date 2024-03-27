<template>
    <div class="w-[100vw] h-[100vh] flex justify-center items-center">
        <Button @click="login('github')" size="lg" class="px-20  " >
            <Icon name="mdi:github" size="28" />
        </Button>
    </div>
</template>

<script setup>
import {useUserStore} from '~/stores/user'

const client = useSupabaseClient()
const user = useSupabaseUser()

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin
  })

  if (error) console.log(error)
}

</script>
