export const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL';
export const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL';
export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

export const openUploadModal = () => ({
  type: OPEN_UPLOAD_MODAL
});

export const closeUploadModal = () => ({
  type: CLOSE_UPLOAD_MODAL
});

export const uploadProgress = (progress) => ({
  type: UPLOAD_PROGRESS,
  payload: {
    progress
  }
});