import { useContext } from '@nuxtjs/composition-api'

export const jobProviderValidator = () => {
    const { $notifier } = useContext()

    const jobPostValidator = (body) => {
        console.log('body.job_title', body.job_title);
        if(!body.job_title || body.job_title == ""){ return $notifier.showMessage({ content: 'Posisi pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.job_type || body.job_type == ""){ return $notifier.showMessage({ content: 'Jenis pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.start_date || body.start_date == ""){ return $notifier.showMessage({ content: 'Periode pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.end_date || body.end_date == ""){ return $notifier.showMessage({ content: 'Periode pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.job_level_id || body.job_level_id == ""){ return $notifier.showMessage({ content: 'Tingkat pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.number_of_candidates || body.number_of_candidates == ""){ return $notifier.showMessage({ content: 'Jumlah kandidat yang dibutuhkan belum terisi.', status: 'warning' }) }
        if(!body.experience_id || body.experience_id == ""){ return $notifier.showMessage({ content: 'Pengalaman belum terisi.', status: 'warning' }) }
        if(!body.job_specialist_id || body.job_specialist_id == ""){ return $notifier.showMessage({ content: 'Spesialisasi pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.job_specialist_id || body.job_specialist_id == ""){ return $notifier.showMessage({ content: 'Spesialisasi pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.workplace_type || body.workplace_type == ""){ return $notifier.showMessage({ content: 'Tipe lokasi pekerjaan belum terisi.', status: 'warning' }) }
        if(!body.job_location_id || body.job_location_id == ""){ return $notifier.showMessage({ content: 'Lokasi kerja belum terisi.', status: 'warning' }) }
        if(!body.start_from_salary || body.start_from_salary == ""){ return $notifier.showMessage({ content: 'Rentang gaji karyawan belum terisi.', status: 'warning' }) }
        if(!body.end_from_salary || body.end_from_salary == ""){ return $notifier.showMessage({ content: 'Rentang gaji karyawan belum terisi.', status: 'warning' }) }
        if(!body.description || body.description == ""){ return $notifier.showMessage({ content: 'Deskripsi pekerjaan belum terisi.', status: 'warning' }) }
        return true;
    }

    return {
        jobPostValidator,
    }
}
