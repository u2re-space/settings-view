/**
 * Contract-runner stub for an unrelated save-time URL resolver.
 *
 * The contribution registry/mount tests never call resolveCwspSettingsBeforeSave,
 * while the current workspace alias points at a shared file that is absent.
 * Keep the test boundary local instead of editing the shared subsystem.
 */
type CwspUrlFields = {
    relayHttpsUrl?: string;
    directHttpsUrl?: string;
};

export const resolveCwspUrlFields = async (
    fields: CwspUrlFields
): Promise<CwspUrlFields> => ({ ...fields });
