import React from "react";
import PageLayout from "../Página-Geral/PageLayout";
import SettingsSidebar from "../Sidebar/Sidebar";
import SettingsHeader from "../Configurações/SettingsHeader";
import SettingsSection from "./SettingsSection";

const SettingsPage: React.FC = () => {
  return (
    <PageLayout sidebar={<SettingsSidebar />}>
      <div className="settings-wrapper">
        <SettingsHeader />

        <SettingsSection
          title="Escolhas:"
          items={
            <>
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
                  <input type="checkbox" />
                  <span className="slider" /> Ative para receber notificações
                  sobre atualizações.
                </label>
              </div>
            </>
          }
        />
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
