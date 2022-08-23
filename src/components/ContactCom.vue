<template>
    <div class="container py-5">
        <div class="contact-section py-5">
            <h2>
                CONTACT US
            </h2>

            <div class="contact-form py-5">
                <div v-if="VSendToServer" class="alert alert-success mb-5" role="alert">
                    <div class="text-center">Thank you!! We will contact you soon.</div>
                </div>
                <form v-if="!VSendToServer" @submit.prevent="SubmitForm" novalidate>
                    <div class="name-email">
                        <input v-model="Vname" type="text" placeholder="Full Name">
                        <input v-model="Vemail" type="email" placeholder="Email Address">
                    </div>
                    <textarea v-model="VComment" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <div class="d-flex justify-content-center">
                        <div class="form-btn">
                            <button type="submit"> Send </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Vname: '',
                Vemail: '',
                VComment: '',
                VSendToServer: false,
                VErrors: {}
            }
        },
        methods: {
            // Send Data To Server
            SubmitFormToServer() {
                let FinalData = {
                    'name': this.Vname,
                    'email': this.Vemail,
                    'comment': this.VComment
                }
                this.Vname = '';
                this.Vemail = '';
                this.VComment = '';
                this.VSendToServer = true;
                console.log(FinalData);
            },
            // Check Valid Email
            validEmail(email) {
                let re =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            // Submit The Form
            SubmitForm() {
                this.VErrors = {};
                if (!this.Vname) {
                    this.VErrors['name'] = 'name Required.';
                }
                if (!this.Vemail) {
                    this.VErrors['email'] = 'Email Required.';
                } else if (!this.validEmail(this.Vemail)) {
                    this.VErrors['email'] = 'Please use a valid Email';
                }
                if (!this.VComment) {
                    this.VErrors['comment'] = 'Comment Required';
                }
                if (!this.VErrors['name'] && !this.VErrors['email'] && !this.VErrors[
                        'comment']) {
                    this.SubmitFormToServer();
                }
            }
        }
    }
</script>