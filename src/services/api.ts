const API_URL = 'http://localhost:3000';

export async function atualizarFoto(formData: FormData) {
    const response = await fetch(`${API_URL}/configuracoes/upload-foto`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Erro ao enviar foto');
    }

    return await response.json();
}
