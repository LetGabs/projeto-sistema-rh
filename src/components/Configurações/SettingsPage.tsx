import React from "react";
import PageLayout from "../Página-Geral/PageLayout";
import SettingsSidebar from "../Sidebar/Sidebar";
import SettingsHeader from "../Configurações/SettingsHeader";
import SettingsSection from "./SettingsSection";

import "./Settings.css";

const SettingsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [file, setFile] = React.useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setSelectedImage(URL.createObjectURL(uploadedFile));
    }
  };

  const uploadPhoto = async () => {
    if (!file) {
      alert("Nenhuma foto selecionada.");
      return;
    }

    const formData = new FormData();
    formData.append("foto", file);

    try {
      const response = await fetch("http://localhost:3000/config/upload-foto", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Foto atualizada com sucesso!");
      } else {
        alert("Erro ao salvar foto: " + data.error);
      }

      console.log("Resposta do backend:", data);
    } catch (error) {
      alert("Erro ao enviar foto.");
      console.error(error);
    }
  };

  return (
    <PageLayout sidebar={<SettingsSidebar />}>
      <div className="settings-wrapper">
        <SettingsHeader />

        {/* --------------------------- FOTO DE PERFIL --------------------------- */}
        <SettingsSection
          title="Foto de Perfil"
          items={
            <div className="settings-item profile-photo-item">
              {/* Preview da foto */}
              <div className="profile-photo-preview">
                <img
                  src={selectedImage || "/default-profile.png"}
                  alt="Foto de Perfil"
                />
              </div>

              {/* Botões de ação */}
              <div className="profile-photo-actions">
                <label htmlFor="photoUpload" className="upload-btn">
                  Alterar Foto
                </label>

                <input
                  id="photoUpload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />

                {selectedImage && (
                  <button className="save-photo-btn" onClick={uploadPhoto}>
                    Salvar Foto
                  </button>
                )}
              </div>
            </div>
          }
        />

        {/* --------------------------- NOTIFICAÇÕES --------------------------- */}
        <SettingsSection
          title="Escolhas:"
          items={
            <div className="settings-item">
              <div className="settings-text">
                <p>
                  <span className="material-symbols-outlined">
                    notification_add
                  </span>
                  <strong className="texto-icon">Notificações</strong>
                </p>
              </div>

              <label className="switch">
                <input
                  type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    alert("Notificações ativadas!");
                  } else {
                    alert("Notificações desativadas!");
                  }
                }}
                />
                <span className="slider" /> Ative para receber notificações
              </label>
            </div>
          }
        />
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
