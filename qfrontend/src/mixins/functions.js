export default {
  methods: {
    async clickExport() {
      this.loading = true;
      this.loadingExport = true;
      this.errors = {};
      await this.$axios({
        url: `/${this.resource}/export`,
        method: 'POST',
        responseType: 'blob',
        data: {
          'sortBy': this.pagination.sortBy,
          'descending': this.pagination.descending,
          'filters': this.filters
        }
      })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', this.filenameExport);
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          this.errors = error;
        });
      this.loadingExport = false;
      this.loading = false;
    },
    clickImport() {
      this.showDialogImport = true;
    }
  }
}
