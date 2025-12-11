import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in process.env.API_KEY");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateDentalResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "Désolé, je ne peux pas répondre pour le moment. Veuillez nous appeler directement.";
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: `Tu es l'assistant virtuel de 'Cinou Dental Clinic', un cabinet dentaire haut de gamme. 
        Ton rôle est de rassurer les patients, de donner des conseils brefs sur l'hygiène dentaire (implants, détartrage, blanchiment) et d'encourager la prise de rendez-vous.
        
        Règles:
        1. Sois poli, professionnel, empathique et concis.
        2. Ne donne jamais de diagnostic médical précis. Dis toujours au patient de consulter le dentiste pour un avis médical.
        3. Le cabinet est spécialisé en : Implants, Détartrage, Soins restaurateurs, Esthétique du sourire.
        4. Si on demande un RDV, suggère d'utiliser le formulaire ou WhatsApp.
        5. Réponds en français uniquement.
        `,
      }
    });
    
    return response.text || "Je n'ai pas compris, pouvez-vous reformuler ?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue. Veuillez réessayer plus tard.";
  }
};