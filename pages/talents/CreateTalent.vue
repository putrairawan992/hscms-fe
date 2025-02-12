<template>
  <div class="v-card v-sheet theme--light container">
    <h1>Form Kandidat</h1>

    <!-- Progress Steps -->
    <div class="progress-steps">
      <div class="step active">
        <div class="step-number">1</div>
        <div class="step-label">Profile</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-label">Pendidikan</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-label">Pekerjaan</div>
      </div>
    </div>

    <form @submit.prevent="submitForm">
      <div class="form-info">
        Sebelum memulai silakan mengungkapkan diri anda dan menyampaikan maksud
        dan tujuan bergabung via online
      </div>

      <div class="form-group">
        <label>Nama Lengkap:</label>
        <div class="input-wrapper">
          <input type="text" placeholder="Masukkan nama lengkap" />
        </div>
      </div>

      <div class="form-group">
        <label>Tempat Tanggal Lahir:</label>
        <div class="input-wrapper date-inputs">
          <input type="text" placeholder="Masukkan tempat lahir" />
          <input type="date" />
        </div>
      </div>

      <div class="form-group">
        <label>Alamat E-Mail:</label>
        <div class="input-wrapper">
          <input type="email" placeholder="Masukkan alamat email" />
        </div>
      </div>

      <div class="form-group">
        <label>Password:</label>
        <div class="input-wrapper">
          <input type="password" placeholder="Masukkan password" />
        </div>
      </div>

      <div class="form-group">
        <label>Ulangi Password:</label>
        <div class="input-wrapper">
          <input type="password" placeholder="Ulangi password" />
        </div>
      </div>

      <div class="form-group">
        <label>Alamat URL (Website):</label>
        <div class="input-wrapper">
          <input type="url" placeholder="Masukkan alamat website" />
        </div>
      </div>

      <div class="form-group">
        <label>Nomor Handphone:</label>
        <div class="input-wrapper">
          <input type="tel" placeholder="Masukkan nomor handphone" />
        </div>
      </div>

      <div class="form-group">
        <label>Emergency Contact:</label>
        <div class="input-wrapper emergency-contacts">
          <input type="text" placeholder="Contact 1" />
          <input type="text" placeholder="Contact 2" />
          <input type="text" placeholder="Contact 3" />
        </div>
      </div>

      <div class="form-group">
        <label>Jenis Kelamin:</label>
        <div class="input-wrapper">
          <select>
            <option value="">Pilih jenis kelamin</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Status Pernikahan:</label>
        <div class="input-wrapper">
          <select>
            <option value="">Pilih status pernikahan</option>
            <option value="single">Single</option>
            <option value="married">Menikah</option>
          </select>
        </div>
      </div>

      <Button type="submit" variant="primary">Submit</Button>
    </form>
  </div>
</template>

<script setup>
const submitForm = () => {
  // Handle form submission
  console.log("Form submitted");
};
</script>

<style scoped>
.container {
  padding: 20px;
  border-radius: 20px;
}

h1 {
  color: #8b1538;
  margin-bottom: 2rem;
}

.progress-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #8b1538;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b1538;
  font-weight: bold;
}

.step.active .step-number {
  background-color: #8b1538;
  color: white;
}

.step-line {
  height: 2px;
  width: 100px;
  background-color: #8b1538;
  margin: 0 1rem;
}

.step-label {
  font-size: 0.9rem;
  color: #666;
}

.form-info {
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
}

.form-group {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

label {
  width: 200px;
  padding-top: 0.75rem;
  color: #333;
  font-size: 0.9rem;
  flex-shrink: 0;
  text-align: left;
}

.input-wrapper {
  flex: 1;
}

input,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

input:focus,
select:focus {
  outline: none;
  border-color: #8b1538;
}

.date-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.emergency-contacts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.submit-btn {
  background-color: #8b1538;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  margin-left: 200px; /* Aligns with inputs */
}

.submit-btn:hover {
  background-color: #6d102c;
}

@media (max-width: 768px) {
  .form-group {
    flex-direction: column;
  }

  label {
    width: 100%;
    margin-bottom: 0.5rem;
    padding-top: 0;
  }

  .date-inputs,
  .emergency-contacts {
    grid-template-columns: 1fr;
  }

  .step-line {
    width: 50px;
  }

  .submit-btn {
    margin-left: 0;
    width: 100%;
  }
}
</style>
