<template lang='pug'>

  div(class="q-pa-md")

    q-dialog(:value="true" @hide="hide")
      q-card(style="width: 500px; max-width: 80vw;")
        q-card-section
          div(class="text-h6") Edit equipment

        q-card-section
          q-input(outlined v-model="equipment.title" label="title")
          q-input(outlined v-model="equipment.equipment_type" label="equipment_type")
          q-input(outlined v-model="equipment.serial_num" label="serial_num")
          q-select(outlined v-model="equipment.organization_id" :options="organizations" label="organization")

        q-card-actions(align="right" class="q-pa-md bg-white text-teal")
          q-btn(outline v-close-popup="1" color="secondary" label="Edit" size='sm' @click="editEquipment")


</template>


<script>
  import {backend} from '../api/index.js'

  export default {
    data: function () {
      let params = this.$route.params
      return {
        equipment: {
          id: params.id,
          title: params.title,
          equipment_type: params.equipment_type,
          serial_num: params.serial_num,
          organization_id: params.organization_id
        },
        organizations: params.organizations_for_select
      }
    },
    methods: {

      hide() {
        this.$router.push({ name: 'Equipments' })
      },

      editEquipment() {
        let params = {
          id: this.equipment.id,
          title: this.equipment.title,
          equipment_type: this.equipment.equipment_type,
          serial_num: this.equipment.serial_num,
          organization_id: this.equipment.organization_id.value
        }

        backend.staffs.update(this.$route.params.path+'/'+this.$route.params.id, params)
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