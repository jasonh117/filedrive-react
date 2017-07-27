export const OPEN_UPLOAD_MODAL = 'OPEN_UPLOAD_MODAL';
export const CLOSE_UPLOAD_MODAL = 'CLOSE_UPLOAD_MODAL';
export const OPEN_CONTENT_MODAL = 'OPEN_CONTENT_MODAL';
export const CLOSE_CONTENT_MODAL = 'CLOSE_CONTENT_MODAL';
export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

export const openUploadModal = () => ({
  type: OPEN_UPLOAD_MODAL
});

export const closeUploadModal = () => ({
  type: CLOSE_UPLOAD_MODAL
});

export const openContentModal = () => ({
  type: OPEN_CONTENT_MODAL
});

export const closeContentModal = () => ({
  type: CLOSE_CONTENT_MODAL
});

export const uploadProgress = (progress) => ({
  type: UPLOAD_PROGRESS,
  payload: {
    progress
  }
});