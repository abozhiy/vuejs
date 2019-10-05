<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Add equipment

        q-card-section
          q-input(outlined v-model="equipment.title" label="title")
          q-input(outlined v-model="equipment.equipment_type" label="equipment_type")
          q-input(outlined v-model="equipment.serial_num" label="serial_num")
          q-select(outlined v-model="equipment.organization_id" :options="organizations" label="organization")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Add" size='sm' @click="addEquipment")

</template>


<script>
  import {backend} from './api/index.js'

  export default {
    data: function () {
      return {
        equipment: {
          title: '',
          equipment_type: '',
          serial_num: '',
          organization_id: ''
        },
        organizations: this.$route.params.organizations_for_select
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Dashboard' })
      },

      addEquipment() {
        let params = {
          title: this.equipment.title,
          equipment_type: this.equipment.equipment_type,
          serial_num: this.equipment.serial_num,
          organization_id: this.equipment.organization_id.value
        }

        backend.staffs.create(this.$route.params.path, params)
        .then((response) => {
          // console.log(response)
          this.equipment.title = ''
          this.equipment.equipment_type = ''
          this.equipment.serial_num = ''
          this.equipment.organization_id = ''
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.$emit('update-equipment-list')
        })
      },
    }
  }
</script>